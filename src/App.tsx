import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Pages */
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Projects from './pages/Projects';
import RequestMaterials from './pages/Request';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<IonRouterOutlet>
				<Route path="/home" component={Home} exact={true} />
				<Route path="/login" component={Login} exact={true} />
				<Route path="/register" component={Register} exact={true} />
				<Route path="/projects" component={Projects} exact={true} />
				<Route path="/request" component={RequestMaterials} exact={true} />
				<Route exact path="/" render={() => <Redirect to="/login" />} />
			</IonRouterOutlet>
		</IonReactRouter>
	</IonApp>
);

export default App;
