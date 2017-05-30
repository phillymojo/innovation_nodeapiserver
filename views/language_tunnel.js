import React from 'react';
import Layout from './layouts/default';
import LanguageTunnelContainer from '../src/components/LanguageTunnelContainer/LanguageTunnelContainer';

class LanguageTunnel extends React.Component {
  render() {
    return (
      <Layout title={this.props.title} >
        <LanguageTunnelContainer />
      </Layout>
    )
  }
};

export default LanguageTunnel;
