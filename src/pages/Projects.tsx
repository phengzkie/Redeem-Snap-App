import React, { useState } from 'react';
import {
	IonApp,
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonButton,
	IonToolbar,
	IonFooter,
	IonCard,
	IonCardHeader,
	IonCardTitle,
	IonCardSubtitle,
	IonModal,
	IonMenuButton,
	IonMenu,
	IonList,
	IonItem,
	IonAvatar,
	IonThumbnail
} from '@ionic/react';

import './Projects.css';

const Projects: React.FC = () => {
	const user1 = 'avatar/img_avatar1.jpg';
	const user2 = 'avatar/img_avatar2.png';
	const user3 = 'avatar/img_avatar3.png';

	const logo = 'img/logo.jpg';

	const data = [
		{
			id: 1,
			project: 'First Project',
			timeline: '05/27/2020 - 06/20/2020',
			projectCost: 200000,
			usersId: [ user1, user2, user3 ]
		},
		{
			id: 2,
			project: 'Highway Project',
			timeline: '05/27/2020 - 06/20/2020',
			projectCost: 10000000,
			usersId: [ user1, user3 ]
		},
		{
			id: 3,
			project: 'Bridge Construction Project',
			timeline: '05/27/2020 - 06/20/2020',
			projectCost: 5000000,
			usersId: [ user2, user3 ]
		},
		{
			id: 4,
			project: '4 Storey Building Project',
			timeline: '05/27/2020 - 06/20/2020',
			projectCost: 20000000,
			usersId: [ user1, user2 ]
		}
	];

	const [ showModal, setShowModal ] = useState(false);
	const [ project, setProject ] = useState({
		id: 0,
		project: '',
		timeline: '',
		projectCost: 0
	});

	const onClick = (id: any) => {
		const filteredProject = data.filter((d) => d.id === id);
		setProject({
			id: filteredProject[0].id,
			project: filteredProject[0].project,
			timeline: filteredProject[0].timeline,
			projectCost: filteredProject[0].projectCost
		});
		setShowModal(true);
	};

	return (
		<IonApp>
			<IonMenu side="start" contentId="content">
				<IonHeader>
					<IonToolbar color="primary">
						<IonTitle>Menu</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<IonList>
						<IonItem>Projects</IonItem>
						<IonItem>Profile</IonItem>
						<IonItem>Logout</IonItem>
					</IonList>
				</IonContent>
			</IonMenu>
			<IonPage id="content">
				<IonHeader>
					<IonToolbar>
						<IonMenuButton slot="start" />
						<IonTitle>Projects</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent className="ion-padding">
					<IonModal isOpen={showModal}>
						<IonToolbar>
							<IonTitle>{project.project}</IonTitle>
							<IonButton onClick={() => setShowModal(false)} slot="end" color="light">
								Close
							</IonButton>
						</IonToolbar>
						<IonContent>
							<h3>Project Details</h3>
							<p>Timeline: {project.timeline}</p>
							<p>Project Cost: {project.projectCost}</p>
							<p>Other details about the project</p>
						</IonContent>
					</IonModal>
					<IonThumbnail>
						<img src={logo} />
					</IonThumbnail>
					{data.map((d) => (
						<IonCard key={d.id}>
							<IonCardHeader>
								<IonCardTitle color="danger">{d.project}</IonCardTitle>
								<IonCardSubtitle>Timeline: {d.timeline}</IonCardSubtitle>
								<IonCardSubtitle>Project Cost: {d.projectCost}</IonCardSubtitle>
								<IonCardSubtitle>Project Members: </IonCardSubtitle>

								<IonItem>
									{d.usersId.map((user) => (
										<IonAvatar key={user}>
											<img className="card-avatar" src={user} />
										</IonAvatar>
									))}
								</IonItem>
								<IonButton onClick={() => onClick(d.id)} size="small">
									View Details
								</IonButton>
							</IonCardHeader>
						</IonCard>
					))}
				</IonContent>
				<IonFooter>
					<IonToolbar>
						<IonTitle>© 2020</IonTitle>
					</IonToolbar>
				</IonFooter>
			</IonPage>
		</IonApp>
	);
};

export default Projects;
