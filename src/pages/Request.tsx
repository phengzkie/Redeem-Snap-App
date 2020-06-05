import React, { useState } from 'react';
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
	IonModal,
	IonCard,
	IonCardHeader,
	IonCardTitle,
	IonCardContent
} from '@ionic/react';

import './Register.css';

const Request: React.FC = () => {
	const [ showModal, setShowModal ] = useState(false);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle className="ion-text-center">Request Materials</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				<IonModal isOpen={showModal}>
					<IonToolbar>
						<IonTitle>Request Materials</IonTitle>
						<IonButton onClick={() => setShowModal(false)} slot="end" color="light">
							Close
						</IonButton>
					</IonToolbar>
					<IonContent>
						<IonItem>
							<IonLabel position="floating">Delivery Date</IonLabel>
							<IonInput type="text" />
						</IonItem>
						<IonItem>
							<IonLabel position="floating">Items</IonLabel>
							<IonInput type="text" />
						</IonItem>
						<IonItem>
							<IonLabel position="floating">Item Id</IonLabel>
							<IonInput type="text" />
						</IonItem>
						<IonItem>
							<IonLabel position="floating">Item Name</IonLabel>
							<IonInput type="text" />
						</IonItem>
						<IonItem>
							<IonLabel position="floating">Description</IonLabel>
							<IonInput type="text" />
						</IonItem>
						<IonItem>
							<IonLabel position="floating">Quantity</IonLabel>
							<IonInput type="number" />
						</IonItem>
						<IonItem>
							<IonLabel position="floating">Unit</IonLabel>
							<IonInput type="text" />
						</IonItem>
					</IonContent>
				</IonModal>
				<IonButton size="small" color="danger" onClick={() => setShowModal(true)}>
					Create New
				</IonButton>
			</IonContent>
			<IonFooter>
				<IonToolbar>
					<IonTitle>© 2020</IonTitle>
				</IonToolbar>
			</IonFooter>
		</IonPage>
	);
};

export default Request;
