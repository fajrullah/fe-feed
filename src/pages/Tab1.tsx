import React, { useEffect, useState } from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonItem, IonLabel, IonImg } from '@ionic/react';
import './Tab1.css';
import API from './Api'

const Tab1: React.FC = () => {
const [arrImages, setArrImages] = useState([])
type Image = {
  farm: number;
  server: string;
  id: string;
  secret: string;
};
useEffect((): void => {
  API()
  .then(res => {
    if (res.data.stat === 'ok' && res.data.photos.photo.length > 0) {
      setArrImages(res.data.photos.photo.slice(1, 10))
    }
  })
},[])
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Images</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Images</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          {
            arrImages.map((key: Image, index: number) => {
              return (<IonItem href="#" className="ion-activated">
              <IonLabel>{index + 1}</IonLabel>
              <IonImg src={`https://farm${key.farm}.staticflickr.com/${key.server}/${key.id}_${key.secret}.jpg`} />
            </IonItem>)
            })
          }
          
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
