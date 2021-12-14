import {history, Link} from 'umi'
import React, {useEffect} from 'react'
// import IntroPage from './intro/index'
import './index.less'
import {
  MenuOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  MobileOutlined,
  GlobalOutlined, MoneyCollectOutlined, AppstoreAddOutlined
} from '@ant-design/icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faAd, faLock, faFilter, faRocket, faAppleAlt,
  faCheck,
  faTimes,
  faFighterJet,
  faMobileAlt,
  faDollarSign,
  faGlobe, faBroadcastTower, faHeadset, faSignInAlt, faChevronRight, faLifeRing,
} from '@fortawesome/free-solid-svg-icons'
import {faGooglePlay} from '@fortawesome/free-brands-svg-icons'
import {Card, Col, Row} from "antd";
import {Layout} from 'antd';

import illSrc from '@/images/ill.svg'

const {Header, Footer, Content} = Layout;

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Header>
        <nav>
          <div className="container">
            <Link to='/' className="smooth">WhatProxy</Link>
            {/*<button className="navbar-toggler" type="button" data-toggle="collapse"*/}
            {/*        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"*/}
            {/*        aria-expanded="false" aria-label="Toggle navigation">*/}
            {/*    <MenuOutlined/>*/}
            {/*    <MenuUnfoldOutlined/>*/}
            {/*    <MenuFoldOutlined/>*/}
            {/*</button>*/}
            {/*<div className="collapse navbar-collapse" id="navbarSupportedContent">*/}
            {/*    <ul className="navbar-nav mr-auto ml-lg-3 align-items-lg-center" style={{display: 'none'}}>*/}
            {/*        <li className="nav-item">*/}
            {/*            <Link to="#features" className="nav-link">特性</Link>*/}
            {/*        </li>*/}
            {/*        <li className="nav-item">*/}
            {/*            <Link to="#purchase" className="nav-link">价格</Link>*/}
            {/*        </li>*/}
            {/*        <li className="nav-item">*/}
            {/*            <Link to="#contact-support" className="nav-link">支持</Link>*/}
            {/*        </li>*/}
            {/*        <li className="nav-item d-lg-none d-md-block">*/}
            {/*            <Link to="/login" className="nav-link smooth">登录</Link>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*    <ul className="navbar-nav ml-auto align-items-lg-center d-none d-lg-block">*/}
            {/*        <li className="ml-lg-3 nav-item">*/}
            {/*            <Link to="/login" className="btn btn-round smooth btn-icon icon-left">*/}
            {/*                <FontAwesomeIcon icon={faSignInAlt}/> 登录*/}
            {/*            </Link>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
          </div>
        </nav>
      </Header>
      <Content>


        <div className="hero-wrapper" id="top">
          <div className="hero">
            <div className="container" style={{display: 'flex', alignItems: 'center'}}>
              <div className="text text-center text-lg-left">
                <h1>全球网络中继服务，随时随处尽情使用</h1>
                <p className="lead">通过我们的网络访问内容提供商、公司网络和公共云服务</p>
                <div className="cta">
                  <Link className="btn btn-lg btn-primary btn-icon icon-right" to="/login">登入
                    <i className="fas fa-chevron-right"/>
                  </Link> &nbsp;
                  <Link className="btn btn-lg btn-warning btn-icon icon-right" to="/register">注册
                    <i className="fas fa-chevron-right"/>
                  </Link> &nbsp;
                </div>
              </div>
              <div className="image d-none d-lg-block">
                <img src={illSrc} alt="img"/>
              </div>
            </div>
          </div>
        </div>

        <div className="callout container">
          <div className="row">
            <div className="col-md-6 col-12 mb-4 mb-lg-0">
              <div className="text-job text-muted text-14">为什么选择泡芙云</div>
              <div className="h1 mb-0 font-weight-bold mt-1" style={{fontSize: '2rem'}}>迄今为止</div>
            </div>
            <div className="col-4 col-md-2 text-center">
              <div className="h2 font-weight-bold">70+</div>
              <div className="text-uppercase font-weight-bold ls-2 text-primary">国际节点</div>
            </div>
            <div className="col-4 col-md-2 text-center">
              <div className="h2 font-weight-bold">6+</div>
              <div className="text-uppercase font-weight-bold ls-2 text-primary">国家地区</div>
            </div>
            <div className="col-4 col-md-2 text-center">
              <div className="h2 font-weight-bold">13000+</div>
              <div className="text-uppercase font-weight-bold ls-2 text-primary">满意用户</div>
            </div>
          </div>
        </div>

        <section id="features">
          <div className="container">
            <Row className="mb-5 text-center">
              <Col lg={{span: 20, offset: 2}}>
                <h2>为你 <span className="text-primary">量身定制<span> 的服务</span></span></h2>
                <p className="lead">可靠的基础设施，并能提供您喜爱的诸多功能</p>
              </Col>
            </Row>
            <Row>
              <Col lg={24}>
                <div className="features">
                  <div className="feature">
                    <div className="feature-icon">
                      <FontAwesomeIcon icon={faFighterJet}/>
                      {/*<MobileOutlined/>*/}
                    </div>
                    <h5 data-i18n="">高速稳定</h5>
                    <p data-i18n="">体验宛若身在海外的访问速度</p>
                  </div>
                  <div className="feature">
                    <div className="feature-icon">
                      <FontAwesomeIcon icon={faMobileAlt}/>
                      {/*<i className="fab fa-html5"/>*/}
                    </div>
                    <h5 data-i18n="">便携设置</h5>
                    <p data-i18n="">我们的服务适用于 macOS、iOS、Android、Windows 和 Linux</p>
                  </div>
                  <div className="feature">
                    <div className="feature-icon">
                      <FontAwesomeIcon icon={faDollarSign}/>

                      {/*<MoneyCollectOutlined/>*/}
                    </div>
                    <h5 data-i18n="">节省成本</h5>
                    <p data-i18n="">相比自托管服务可节省大量费用</p>
                  </div>
                  <div className="feature">
                    <div className="feature-icon">
                      <FontAwesomeIcon icon={faGlobe}/>

                    </div>
                    <h5 data-i18n="">全球互联</h5>
                    <p data-i18n="">通过 IXP 连接至全球内容提供商，更加快速</p>
                  </div>
                  <div className="feature">
                    <div className="feature-icon">
                      <FontAwesomeIcon icon={faBroadcastTower}/>
                    </div>
                    <h5 data-i18n="">运营商友好</h5>
                    <p data-i18n="">我们的产品和您的当地运营商兼容，适用于您的固网与移动网络</p>
                  </div>
                  <div className="feature">
                    <div className="feature-icon">
                      <FontAwesomeIcon icon={faGooglePlay}/>
                    </div>
                    <h5 data-i18n="">多应用兼容</h5>
                    <p data-i18n="">提供全面且可靠的第三方应用程序兼容</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section id="design" className="section-design">
          <div className="container">
            <Row>
              <Col lg={10} className="d-none d-lg-block">
                <img src="/images/data_center.svg" alt="user flow" className="img-fluid"/>
              </Col>
              <Col lg={14} md={24} className="pl-lg-5">
                <div className="badge badge-primary mb-3" data-i18n="">CROSS DEVICES &amp; PLATFORMS
                </div>
                <h2 data-i18n="">在你心爱的电子设备中使用，无论是移动的手机还是固定的电脑，随时随处可用</h2>
                <p className="lead" data-i18n="">泡芙云的服务适用于 macOS、iOS、Android、Windows 和
                  Linux，借助第三方客户端，可在手机、电脑、路由器、游戏机、电视盒子中使用。</p>
              </Col>
            </Row>
          </div>
        </section>

        <section id="components" className="section-design section-design-right">
          <div className="container">
            <Row>
              <Col lg={14} className="pr-lg-5 pr-0">
                <div className="badge badge-primary mb-3" data-i18n="">UNBLOCK STREAMING MEDIA</div>
                <h2 data-i18n="">解锁流媒体，观赏和聆听优质的内容</h2>
                <p className="lead" data-i18n="">通过 泡芙云 的服务，可以观看包括 Netflix、Hulu、HBO、TVB、Happyon、AbemaTV
                  等在内的多种流媒体视频，聆听包括 Spotify、Pandora 等在内的流媒体音乐。</p>
              </Col>
              <Col lg={10} className="d-none d-lg-block">
                <div className="abs-images">
                  <img src="/images/netflix.png" alt="user flow"
                       className="img-fluid rounded dark-shadow"/>
                  <img src="/images/spotify.png" alt="user flow"
                       className="img-fluid rounded dark-shadow"/>
                  <img src="/images/hbo.png" alt="user flow"
                       className="img-fluid rounded dark-shadow"/>
                </div>
              </Col>
            </Row>
          </div>
        </section>


        <section id="support-us" className="support-us section-design">
          <div className="container">
            <Row>
              <Col lg={16} className="d-none d-lg-block">
                <img src="/images/waiting_notifications.svg" alt="user flow"
                     className="img-fluid" style={{width: '30rem'}}/>
              </Col>
              <Col lg={8} md={24}>
                <h2 data-i18n="">不仅仅如此，亦包含以下诸多特性</h2>
                <p className="lead" data-i18n="">* 部分特性需要配合第三方客户端与托管规则使用</p>
                <ul className="list-icons">
                  <li>
              <span className="card-icon bg-primary text-white">
                <FontAwesomeIcon icon={faAd}/>
              </span>
                    <span>过滤常用网站广告、常用视频广告、其他流媒体网站广告</span>
                  </li>
                  <li>
              <span className="card-icon bg-primary text-white">
                <FontAwesomeIcon icon={faFilter}/>
              </span>
                    <span>智能分流系统，所有国内网站直线连接，增强用户体验</span>
                  </li>
                  <li>
              <span className="card-icon bg-primary text-white">
                 <FontAwesomeIcon icon={faAppleAlt}/>
              </span>
                    <span>Apple服务加速 (App Store、Apple Music、iCloud、iTunes等)</span>
                  </li>
                  <li>
              <span className="card-icon bg-primary text-white">
                               <FontAwesomeIcon icon={faRocket}/>
              </span>
                    <span>国外常用网站加速 (Google/Youtube/Twitter/Instgram/Github等)</span>
                  </li>
                  <li>
              <span className="card-icon bg-primary text-white">
                                <FontAwesomeIcon icon={faLock}/>

              </span>
                    <span>在传输过程中使用最强的加密方式，保护用户数据和隐私</span>
                  </li>
                  <li>
              <span className="card-icon bg-primary text-white">
                  <FontAwesomeIcon icon={faGooglePlay}/>
              </span>
                    <span>与诸多平台上的优秀应用程序兼容，这些应用程序由许多创新公司和开发人员开发</span>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </section>


        <section id="purchase" className="bg-gr container">
          <Col>
            <Row>
              <Col md={{span: 20, offset: 2}} lg={{span: 20, offset: 2}} span={24} className="text-center">
                <h2 className="mt-3 text-white">出色的体验，意想不到的价格</h2>
                <p className="lead"
                   style={{color: 'rgba(255, 255, 255, 0.5)'}}>不要把宝贵的时间，浪费在等待上。即刻开启全球网络中继服务，在任何时间任何地点访问全球互联网。</p>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col span={24} md={8} lg={8} className="">
                <div className="pricing">
                  <div className="pricing-title">
                    标准版
                  </div>
                  <div className="pricing-padding">
                    <div className="pricing-price">
                      <div>¥9.9</div>
                      <div>每月</div>
                    </div>
                    <div className="pricing-details">
                      <div className="pricing-item">
                        <div className="pricing-item-icon" style={{background: '#6574f7'}}>
                          <FontAwesomeIcon icon={faCheck}/>
                        </div>
                        <div className="pricing-item-label">50GB 使用流量</div>
                      </div>
                      <div className="pricing-item">
                        <div className="pricing-item-icon" style={{background: '#6574f7'}}>
                          <FontAwesomeIcon icon={faCheck}/>

                        </div>
                        <div className="pricing-item-label">2个 在线客户端</div>
                      </div>
                      <div className="pricing-item">
                        <div className="pricing-item-icon" style={{background: '#6574f7'}}>
                          <FontAwesomeIcon icon={faCheck}/></div>
                        <div className="pricing-item-label">工单技术支持</div>
                      </div>
                      <div className="pricing-item">
                        <div className="pricing-item-icon" style={{background: '#6574f7'}}>
                          <FontAwesomeIcon icon={faCheck}/></div>
                        <div className="pricing-item-label">国际标准节点</div>
                      </div>
                      <div className="pricing-item">
                        <div className="pricing-item-icon text-white"
                             style={{background: '#98a6ad'}}>
                          <FontAwesomeIcon icon={faTimes}/>
                        </div>
                        <div className="pricing-item-label text-muted">
                          <del>国内中转节点</del>
                        </div>
                      </div>
                      <div className="pricing-item">
                        <div className="pricing-item-icon text-white"
                             style={{background: '#98a6ad'}}>
                          <FontAwesomeIcon icon={faTimes}/>

                        </div>
                        <div className="pricing-item-label text-muted">
                          <del>IPLC专线节点</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-cta go-to-buy-page">
                    <Link to="/user/shop">订阅 <FontAwesomeIcon icon={faChevronRight}/></Link>
                  </div>
                </div>
              </Col>
              <Col span={24} md={8} lg={8} className="">
                <div className="pricing">
                  <div className="pricing-title">
                    高级版
                  </div>
                  <div className="pricing-padding">
                    <div className="pricing-price">
                      <div>¥19.9</div>
                      <div>每月</div>
                    </div>
                    <div className="pricing-details">
                      <div className="pricing-item">
                        <div className="pricing-item-icon" style={{background: '#6574f7'}}>
                          <FontAwesomeIcon icon={faCheck}/></div>
                        <div className="pricing-item-label">100GB 使用流量</div>
                      </div>
                      <div className="pricing-item">
                        <div className="pricing-item-icon" style={{background: '#6574f7'}}><FontAwesomeIcon
                          icon={faCheck}/></div>
                        <div className="pricing-item-label">4个 在线客户端</div>
                      </div>
                      <div className="pricing-item">
                        <div className="pricing-item-icon" style={{background: '#6574f7'}}>
                          <FontAwesomeIcon icon={faCheck}/>
                        </div>
                        <div className="pricing-item-label">24/7 在线技术支持</div>
                      </div>
                      <div className="pricing-item">
                        <div className="pricing-item-icon" style={{background: '#6574f7'}}>
                          <FontAwesomeIcon icon={faCheck}/></div>
                        <div className="pricing-item-label">国际标准节点</div>
                      </div>
                      <div className="pricing-item">
                        <div className="pricing-item-icon" style={{background: '#6574f7'}}>
                          <FontAwesomeIcon icon={faCheck}/>
                        </div>
                        <div className="pricing-item-label">国内中转节点</div>
                      </div>
                      <div className="pricing-item">
                        <div
                          className="pricing-item-icon text-white"
                          style={{background: '#98a6ad'}}>
                          <FontAwesomeIcon icon={faTimes}/></div>
                        <div className="pricing-item-label text-muted">
                          <del>IPLC专线节点</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-cta go-to-buy-page">
                    <Link to="/user/shop">订阅 <FontAwesomeIcon icon={faChevronRight}/></Link>
                  </div>
                </div>
              </Col>
              <Col span={24} md={8} lg={8} className="">
                <div className="pricing">
                  <div className="pricing-title">
                    加强版
                  </div>
                  <div className="pricing-padding">
                    <div className="pricing-price">
                      <div>¥29.9</div>
                      <div>每月</div>
                    </div>
                    <div className="pricing-details">
                      <div className="pricing-item">
                        <div className="pricing-item-icon" style={{background: '#6574f7'}}><FontAwesomeIcon
                          icon={faCheck}/></div>
                        <div className="pricing-item-label">300GB 使用流量</div>
                      </div>
                      <div className="pricing-item">
                        <div className="pricing-item-icon" style={{background: '#6574f7'}}><FontAwesomeIcon
                          icon={faCheck}/></div>
                        <div className="pricing-item-label">8个 在线客户端</div>
                      </div>
                      <div className="pricing-item">
                        <div className="pricing-item-icon" style={{background: '#6574f7'}}><FontAwesomeIcon
                          icon={faCheck}/></div>
                        <div className="pricing-item-label">24/7 在线技术支持</div>
                      </div>
                      <div className="pricing-item">
                        <div className="pricing-item-icon" style={{background: '#6574f7'}}><FontAwesomeIcon
                          icon={faCheck}/></div>
                        <div className="pricing-item-label">国际标准节点</div>
                      </div>
                      <div className="pricing-item">
                        <div className="pricing-item-icon" style={{background: '#6574f7'}}><FontAwesomeIcon
                          icon={faCheck}/></div>
                        <div className="pricing-item-label">国内中转节点</div>
                      </div>
                      <div className="pricing-item">
                        <div className="pricing-item-icon" style={{background: '#6574f7'}}><FontAwesomeIcon
                          icon={faCheck}/></div>
                        <div className="pricing-item-label">IPLC专线节点</div>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-cta go-to-buy-page">
                    <Link to="/user/shop">订阅 <FontAwesomeIcon icon={faChevronRight}/></Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </section>


        <section id="try" className="section-dark" style={{display: 'none'}}>
          <div className="container ">
            <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
              <div className="swiper-wrapper" style={{transitionDuration: '300ms'}}>
                <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2">
                  <div className="col-lg-8 offset-lg-2 text-center">
                    <blockquote>第三个评价要咋写啊我编不下去了，你们记得改文案啊不然就。这个是占位符占位符🐈🐶</blockquote>
                    <div className="text-name mt-4">用户名</div>
                    <div className="text-job mt-2">职位</div>
                  </div>
                </div>
                <div className="swiper-slide" data-swiper-slide-index="0">
                  <div className="col-lg-8 offset-lg-2 text-center">
                    <blockquote>我的妈我跟你说真的好用到飞起，我的妈我跟你说真的好用到飞起，我的妈我跟你说真的好用到飞起。素质三连。</blockquote>
                    <div className="text-name mt-4">某一沙雕网友</div>
                    <div className="text-job mt-2"><a href="/">家里蹲大学</a> 学生</div>
                  </div>
                </div>
                <div className="swiper-slide" data-swiper-slide-index="1">
                  <div className="col-lg-8 offset-lg-2 text-center">
                    <blockquote>大家好，我是练习时长两年半的个人练习生，喜欢唱、跳、rap、篮球</blockquote>
                    <div className="text-name mt-4">CXK</div>
                    <div className="text-job mt-2"><a href="/">XX公司</a>唱跳练习生</div>
                  </div>
                </div>
                <div className="swiper-slide" data-swiper-slide-index="2">
                  <div className="col-lg-8 offset-lg-2 text-center">
                    <blockquote>第三个评价要咋写啊我编不下去了，你们记得改文案啊不然就。这个是占位符占位符🐈🐶</blockquote>
                    <div className="text-name mt-4">用户名</div>
                    <div className="text-job mt-2">职位</div>
                  </div>
                </div>
                <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0">
                  <div className="col-lg-8 offset-lg-2 text-center">
                    <blockquote>我的妈我跟你说真的好用到飞起，我的妈我跟你说真的好用到飞起，我的妈我跟你说真的好用到飞起。素质三连。</blockquote>
                    <div className="text-name mt-4">某一沙雕网友</div>
                    <div className="text-job mt-2"><a href="/">家里蹲大学</a> 学生</div>
                  </div>
                </div>
              </div>
              <div className="swiper-button-prev"
                   style={{color: 'rgba(255,255,255,.6)', backgroundImage: 'none'}}
                   tabIndex={0}
                   role="button"
                   aria-label="Previous slide"><i className="fas fa-chevron-left"
                                                  style={{fontSize: '20px'}}></i></div>
              <div className="swiper-button-next"
                   style={{color: 'rgba(255,255,255,.6)', backgroundImage: 'none'}}
                   tabIndex={0}
                   role="button"
                   aria-label="Next slide"><i className="fas fa-chevron-right"
                                              style={{fontSize: '20px'}}></i></div>
              <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
          </div>
        </section>


        <section className="download-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7">
                <h2>开始使用优秀的全球网络中继服务</h2>
                <p className="lead">Start using outstanding global network relay service</p>
              </div>
              <div className="col-md-5 text-right">
                <Link to="/register" className="btn btn-primary btn-lg">立即注册</Link>
              </div>
            </div>
          </div>
        </section>


        <section id="contact-support" className="before-footer" /*style="display:none"*/>
          <div className="container">
            <Row>
              <Col md={12}>
                <Card className="long-shadow">
                  {/*<div className="card-body d-flex p-45">*/}
                  {/*    <div className="card-icon bg-primary text-white">*/}
                  {/*        <FontAwesomeIcon icon={faHeadset}/>*/}
                  {/*    </div>*/}
                  <div>
                    <h5>售前咨询</h5>
                    <p className="lh-sm">有任何关于会员计划的疑问？联系我们的售前咨询小组，马上为您解答。</p>
                    <div className="mt-4 text-right">
                      <Link to="/" className="link-icon">联系我们
                        <FontAwesomeIcon icon={faChevronRight}/>
                      </Link>
                    </div>
                  </div>
                  {/*</div>*/}
                </Card>
              </Col>
              <Col md={12}>
                <Card className="long-shadow">
                  {/*<div className="card-body p-45 d-flex">*/}
                  {/*    <div className="card-icon bg-primary text-white">*/}
                  {/*      <FontAwesomeIcon icon={faLifeRing}/>*/}
                  {/*    </div>*/}
                  <div>
                    <h5>技术支持</h5>
                    <p>泡芙云 在您的订阅周期内为您提供一定程度上的技术支持。</p>
                    <div className="mt-4 text-right">
                      <Link to="/" className="link-icon">联系我们
                        <FontAwesomeIcon icon={faChevronRight}/></Link>
                    </div>
                  </div>
                  {/*</div>*/}
                </Card>
              </Col>
            </Row>
          </div>
        </section>
      </Content>
      <Footer>
        <div className="container">
          <Row>
            <Col md={10}>
              <h3 className="text-capitalize">泡芙云</h3>
              <div className="pr-lg-5">
                <p>© 2017-2021 Puff Networks LLC. All Rights Reserved.</p>
              </div>
            </Col>
            <Col md={14}>
              <Row>
                <Col md={8}>
                  <h4>条款及政策</h4>
                  <ul>
                    <li><Link to="/tos" data-i18n="dashboard">服务条款</Link></li>
                    <li><Link to="/aup" data-i18n="dashboard">使用政策</Link></li>
                  </ul>
                </Col>
                <Col md={8}>
                  <h4>服务</h4>
                  <ul>
                    <li>
                      <Link to="/user" data-i18n="dashboard">用户中心</Link></li>
                    <li><Link to="/user" data-i18n="dashboard">购买套餐</Link></li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Footer>
    </Layout>
  )
}

export default IndexPage
