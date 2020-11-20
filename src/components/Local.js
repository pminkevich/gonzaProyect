import { React, useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link, useRouteMatch, useParams } from "react-router-dom";
import './Local.css'

//mapas
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

const map = (
  <Map center={[50.879, 4.6997]} zoom={12} width={600} height={400}>
    <Marker anchor={[50.874, 4.6947]} payload={1} onClick={({ event, anchor, payload }) => { }} />

    <Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
      <img src='pigeon.jpg' width={240} height={158} alt='' />
    </Overlay>
  </Map>
)


//componentes de las estrellas
const StarWhite = () => {
  return (

    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
    </svg>


  )
}
const StarBlack = () => {
  return (

    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg >


  )
}

const Stars = ({ cant }) => {
  let points = [];
  let faltan = [];

  for (let index = 0; index < cant; index++) {
    points.push(<StarBlack key={index} />);
  }
  for (let index = 0; index < 5 - cant; index++) {
    faltan.push(<StarWhite key={index} />);

  }

  return (
    <div className="stars">
      {points}
      {faltan}

    </div>
  )

}
//ventana que se abre cuando pulso el boton

export const LocalHome = ({ nombre, descripcion, cantStars, geolat, geolong }) => {

  //parametros y ruta
  let { tipo } = useParams();
  let match = useRouteMatch();

  const [center, setCenter] = useState([])
  // const [zoom, setZoom] = useState(12)

  //states

  //useEffec
  useEffect(() => {
    setCenter([geolat, geolong])

  }, [])


  const MAPTILER_ACCESS_TOKEN = 'M0eBTeIn5UbhqfcrDofy'
  const MAP_ID = 'streets'

  function mapTilerProvider(x, y, z, dpr) {
    return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png?key=${MAPTILER_ACCESS_TOKEN}`

  }
  const handleBoundsChange = ({ center, zoom, bounds, initial }) => {
    if (initial) {

      console.log(center);
      console.log('Got initial bounds: ', bounds)

    }

    setCenter([geolat, geolong])
    // setZoom(zoom);
  }




  return (


    <div className="ventanaLocal">
      <div className="headModal">
        {/* <h1>{tipo}</h1> */}
        <h3>{nombre}</h3>
        <h4>DoubleClick = ZOOM</h4>



        <Map
          provider={mapTilerProvider}
          dprs={[1, 2]}
          defaultCenter={[-34.5930291, -58.3989215]}
          defaultZoom={10}
          center={center}
          zoom={12}
          onBoundsChanged={handleBoundsChange}
          width={300}
          height={250}
        >
          <Marker anchor={[geolat - 0.005, geolong - 0.005]} payload={1} onClick={({ event, anchor, payload }) => alert('prueba')} />

          <Overlay
            anchor={center}
            offset={[120, 79]}

          >
            <img src='pigeon.jpg' width={240} height={158} alt='' />
          </Overlay>



        </Map>





        <Link to={`${match.url}`}><Button className="btnClose" variant="dark">X</Button></Link>
      </div>
      <div className="map">

      </div>
      <div className="footModal">
        <p>{descripcion}</p>
        <Stars className="stars" cant={cantStars} />

      </div>

    </div>


  );
}



export const Local = ({
  imagen,
  nombre,
  tipo,
  geoposicion,
  descripcion,
  stars
}) => {

  let match = useRouteMatch();
  // console.log(geoposicion)

  return (
    <div className="boxCard">
      <Card className="card" style={{ width: '18rem' }}>
        <Card.Img loading="lazy" variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {descripcion}
          </Card.Text>
          <h3><Stars cant={stars} /></h3>
          <Link to={`${match.url}/${tipo}/data?name=${nombre}&&descripcion=${descripcion}&&cant=${stars}&&geolat=${geoposicion.w_}&&geolong=${geoposicion.T_}`}> <Button variant="primary">Detalles</Button></Link>
        </Card.Body>
      </Card>

    </div>
  )

}

