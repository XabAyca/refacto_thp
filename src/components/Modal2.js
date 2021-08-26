import { Col, Input, Modal, Row } from 'antd/es';
import React from 'react';
import MentionsTagsComponent from './MentionsTagsComponent';

const Modal2 = ({ state, uploadPicture, setState }) => {
  
    const updateMentions = (value) => {
    setState({ ...state, mentions:value });
  }

  const updateHashtags = (value) => {
    setState({ ...state, hashtags: value })
  }

  return (
      <Modal title="Upload a picture" okText="Upload" visible={state.uploadModal} onOk={uploadPicture} onCancel={() => setState({...state, uploadModal: false })}>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>Description:</b>
            <Input id="description" title="Description" type="text" value={state.description} onChange={(e) => setState({ ...state, description: e.target.value })} />
          </Col>
        </Row>
        <MentionsTagsComponent type="mentions" value={state.mentions} title="Mention a user" setValue={updateMentions} />
        <MentionsTagsComponent type="tags" value={state.hashtags} title="Hashtags" setValue={updateHashtags} />
      </Modal>
  );
};

export default Modal2;