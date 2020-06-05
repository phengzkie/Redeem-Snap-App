import React from 'react';
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonItem,
	IonLabel,
	IonInput,
	IonButton,
	IonToolbar,
	IonFooter,
	IonCard,
	IonCardHeader,
	IonCardTitle,
	IonCardContent
} from '@ionic/react';

import './Login.css';

const Login: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle className="ion-text-center">Login</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				<IonCard>
					<IonCardHeader>
						<IonCardTitle className="ion-text-center">Redeem Snap</IonCardTitle>
					</IonCardHeader>

					<IonCardContent>
						<form>
							<IonItem className="ion-margin-top">
								<IonLabel position="stacked">Username</IonLabel>
								<IonInput required type="text" />
							</IonItem>
							<IonItem className="ion-margin-top">
								<IonLabel position="stacked">Password</IonLabel>
								<IonInput required type="password" />
							</IonItem>
							<div className="ion-padding">
								<IonButton expand="block">Login</IonButton>
							</div>
						</form>
					</IonCardContent>
				</IonCard>
			</IonContent>
			<IonFooter>
				<IonToolbar>
					<IonTitle>© 2020</IonTitle>
				</IonToolbar>
			</IonFooter>
		</IonPage>
	);
};

export default Login;
