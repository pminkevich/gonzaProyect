import { React, useEffect } from 'react'
import { Local, LocalHome } from './Local'
import { useRouteMatch, Switch, Route, useLocation, useParams } from "react-router-dom";
import './Locales.css'

import { Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getLocales } from '../redux/localesDuck'



function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const LocalList = ({ locales, loading, getLocales }) => {
  let match = useRouteMatch();
  let query = useQuery();
  let { tipo } = useParams();

  //estado local
  //const [spinner, setSpinner] = useState(true);
  //globar


  const localList = locales

  useEffect(() => {

    getLocales(tipo)

  }, [tipo])



  return (

    <div className="locales">
      {

        loading ? <Spinner animation="border" role="status" /> :
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

const mapState = (state) => {
  return {
    locales: state.locales.list,
    loading: state.locales.loading
  }
}


export default connect(mapState, { getLocales })(LocalList)