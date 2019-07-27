import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { requestAction } from '../redux/actions/index';

class Home extends Component {
  constructor (prop) {
    super(prop);
    this.state = {

    }
  }

  componentDidMount () {
    this.props.dispatch(requestAction({ appType: 'H5', lang: 'zh' }));
  }

  render () {
    const { prdList } = this.props;
    return (
      <Fragment>
        <div className='production_box'>
          {
            prdList.map((val, index) => (
              <div key={index} className='production_list'>
                <div className='production_img_home'>
                  <img src={val.image} alt='' />
                </div>
                <p>{val.title}</p>
                <p><span>¥{val.vip_price}</span><span>销量：{val.sold}</span></p>
              </div>
            ))
          }
        </div>
      </Fragment>
    )
  }
}

export default connect((state) => {
  return ({
    prdList: state.test.requestData
  })
})(Home);
