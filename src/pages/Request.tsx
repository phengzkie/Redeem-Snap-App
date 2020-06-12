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
  IonCardSubtitle
} from '@ionic/react';

import './Register.css';

const Request: React.FC = () => {
  const [ showModal, setShowModal ] = useState(false);

  const [ requestItems, setRequestItems ] = useState({
    reqItems: [] as any
  });

  const { reqItems } = requestItems;

  const [ request, setRequest ] = useState({
    date: '',
    id: '',
    itemName: '',
    description: '',
    quantity: 0,
    unit: '',
    status: 'Pending'
  });

  const { date, id, itemName, description, quantity, unit } = request;

  const onIonChange = (e: any) => {
    setRequest({ ...request, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: any) => {
    e.preventDefault();

    const updatedRequest = [ ...reqItems, request ];

    setRequestItems({
      reqItems: updatedRequest
    });

    setShowModal(false);
    clearFields();
  };

  const clearFields = () => {
    setRequest({
      date: '',
      id: '',
      itemName: '',
      description: '',
      quantity: 0,
      unit: '',
      status: 'Pending'
    });
  };

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
              <IonInput type="text" name="date" value={date} onIonChange={onIonChange} />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Item Id</IonLabel>
              <IonInput type="text" name="id" value={id} onIonChange={onIonChange} />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Item Name</IonLabel>
              <IonInput type="text" name="itemName" value={itemName} onIonChange={onIonChange} />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Description</IonLabel>
              <IonInput type="text" name="description" value={description} onIonChange={onIonChange} />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Quantity</IonLabel>
              <IonInput type="number" name="quantity" value={quantity} onIonChange={onIonChange} />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Unit</IonLabel>
              <IonInput type="text" name="unit" value={unit} onIonChange={onIonChange} />
            </IonItem>
            <IonButton expand="block" size="small" color="primary" onClick={submitHandler}>
              Submit Request
            </IonButton>
          </IonContent>
        </IonModal>
        <IonButton size="small" color="danger" onClick={() => setShowModal(true)}>
          Create New
        </IonButton>
        {reqItems.map((req: any) => {
          return (
            <IonCard key={req.id}>
              <IonCardHeader>
                <IonCardTitle color="danger">{req.id}</IonCardTitle>
                <IonCardSubtitle>Date: {req.date}</IonCardSubtitle>
                <IonButton size="small" color="success">
                  View
                </IonButton>
                <IonButton size="small" color="warning">
                  Edit
                </IonButton>
                <IonCardSubtitle>Status: {req.status}</IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
          );
        })}
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
