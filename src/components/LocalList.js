import { React, useEffect, useState } from 'react'
import { Local, LocalHome } from './Local'
import { Link, useRouteMatch, Switch, Route, useLocation, useParams } from "react-router-dom";
import './Locales.css'
import { db, auth } from './../firebase'
import { useSelector, useDispatch } from 'react-redux'
import { Spinner } from 'react-bootstrap'
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const LocalList = () => {
  let match = useRouteMatch();
  let query = useQuery();
  let { tipo } = useParams();

  //estado local
  const [spinner, setSpinner] = useState(true);
  //globar
  const localList = useSelector((state) => { return state.localList })

  const dispatch = useDispatch()

  useEffect(() => {

    setSpinner(true);

    const query = db.collection('locales').where('tipo', '==', tipo);

    query.get().then(res => {
      let locales = res.docs.map(doc => doc.data());

      dispatch({
        type: 'SET_LOCAL_LIST',
        payload: locales
      })

      setSpinner(false);
      //setLocal(locales)
      //console.log(locales)
    })

  }, [tipo, dispatch])



  return (

    <div className="locales">




      {

        spinner ? <Spinner animation="border" role="status" /> :
          localList.map(({ imagen, tipo, nombre, geoposicion, descripcion, stars }) => {

            return (
              <Local key={nombre}
                imagen={imagen}
                tipo={tipo}
                nombre={nombre}
                geoposicion={geoposicion}
                descripcion={descripcion}
                stars={stars}
              />
            )

          })
      }

      <Switch>
        <Route path={`${match.path}/:tipo/data`}>
          {
            query.get("name") !== null &&

            <LocalHome
              nombre={query.get("name")}
              descripcion={query.get("descripcion")}
              cantStars={query.get("cant")}
              geolat={query.get("geolat")}
              geolong={query.get("geolong")}

            />

          }

        </Route>

      </Switch>

    </div>

  )
}

export default LocalList