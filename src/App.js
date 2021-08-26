// Kata written by Matthieu BRAULT for the next-react formation from TheHackingProject
import React, { useState } from 'react';
import { Avatar, Button, Card, Col, Icon, Row } from 'antd/es';
import data from '../src/data/data.json';
import Modal1 from './components/Modal1';
import Modal2 from './components/Modal2';
import Modal3 from './components/Modal3';

const App = () => {
  const [state, setState] = useState(data)
  const [preview, setPreview] = useState({
      previewItem: 0,
      previewPublicationModal: false,
    })

  const formatDate= (date) =>{
    const newDate = new Date(date);
    return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
  }

  const openPreview =(postNumber)=> {
    setPreview({
      previewItem: postNumber,
      previewPublicationModal: true,
    });
  }

  const uploadPicture=()=> {
    alert("J'upload une image avec la description : " + state.description + " et les hashtags " + state.hashtags + " et les mentions " + state.mentions);
  }

  const onCancelPreview = () => {
    setPreview({ ...preview, previewPublicationModal: false })
  }


  return (
    <div style={{ margin: 50 }}>
      <Modal1 state={state} preview={preview} onCancelPreview={onCancelPreview}/>
      <Modal2 state={state} uploadPicture={uploadPicture} setState={setState} />
      <Modal3 state={state} setState={setState} />

      <Row type="flex" align="middle" justify="center">
        <Col sm={16} xs={24}>
          <Card bordered>
            <Row type="flex" align="middle" justify="center">
              <Col md={14} sm={16} xs={24}>
                <Row type="flex" justify="space-between">
                  <Col span={10} className="text-center">
                    <Avatar size={100} icon="user" className="profil-pic" src={state.profileData.profilePicture} />
                    <h3>{`${state.profileData.firstname} ${state.profileData.lastname}`}</h3>
                  </Col>
                  <Col span={10}>
                    <p>
                      <Icon type="user" className="p-icon" />
                      {state.profileData.username}
                    </p>
                    <p>
                      <Icon type="mail" className="p-icon" />
                      {state.profileData.email}
                    </p>
                    <p>
                      <Icon type="phone" className="p-icon" />
                      {state.profileData.phoneNumber}
                    </p>
                    <p>
                      <Icon type="calendar" className="p-icon" />
                      {formatDate(state.profileData.createdAt)}
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col md={10} sm={16} xs={24} className="text-center">
                <Button type="ghost" icon="setting" onClick={() => setState({ ...state, editProfilModal: true })}>Edit account</Button>
                <br />
                <br />
                <Button type="ghost" icon="upload" onClick={() => setState({ ...state, uploadModal: true })}>Upload a picture</Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col sm={18} xs={24}>
          <Col span={24} className="container text-center">
            <h2>
              <Icon type="save" />
              <span className="span-icon">Publications</span>
            </h2>
            {state.profileData.posts.map((post) => {
              return (
                <Card bordered className="card-pubs" onClick={() => openPreview(0)}>
                  <img src={post.imageUrl} width={200} height={200} alt={post.imageUrl} />
                </Card>
              );
            })}
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default App;
