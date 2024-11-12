
import './App.css';
function App() {

  // const title = {
  //   t1: {
  //     tit: '教學影音',
  //     content: '滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水'
  //   },
  //   t2: {
  //     tit: '良性互動',
  //     content: '滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水'
  //   },
  //   t3: {
  //     tit: '趨勢分享',
  //     content: '滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水'
  //   },
  // }
  // const { t1, ...other } = title;
  // import `./App.css`;


  return (
    <>
      {/* banner */}
      <div className="banner">
        <img src="./react-test1112/images/banner.jpg" alt="" />
      </div>
      {/* 特色區 */}
      <div className="content">
        <div className="box">
          <h2>教學影音</h2>
          <p>滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水</p>
        </div>
        <div className="box">
          <h2>良性互動</h2>
          <p>滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水</p>
        </div>
        <div className="box">
          <h2>趨勢分享</h2>
          <p>滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水</p>
        </div>

      </div>
      {/* 主標 */}
      <h1>讓學習成為一種習慣</h1>
      {/* 推薦課程 */}
      <dix className="content2">
        <h2 className='lesson0'>推薦課程</h2>
      </dix>
      {/* 課程1 */}
      <div id="box">
      <div className="lesson1">
        <img src="./react-test1112/images/unity.jpg" alt="" />
        <h3>Unity5</h3>
        <p className='pp'>滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水</p>
        <p className='p2'>講師:12345</p>
        <p className='p2'>時長:4hr</p>
        <p><span>原價:10000 </span><span className='span2'>特價:9999</span></p>
        <p><button>付款上課去</button></p>
      </div>
      {/* 課程2 */}
      <div className="lesson1">
        <img src="./react-test1112/images/gamesalad.jpg" alt="" />
        <h3>GameSalad2D遊戲製作</h3>
        <p className='pp'>滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水</p>
        <p className='p2'>講師:12345</p>
        <p className='p2'>時長:4hr</p>
        <p><span>原價:10000 </span><span className='span2'>特價:9999</span></p>
        <p><button>付款上課去</button></p>
      </div>
      {/* 課程3 */}
      <div className="lesson1">
        <img src="./react-test1112/images/gwd.jpg" alt="" />
        <h3>Google Web Design</h3>
        <p className='pp'>滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水</p>
        <p className='p2'>講師:12345</p>
        <p className='p2'>時長:4hr</p>
        <p><span>原價:10000 </span><span className='span2'>特價:9999</span></p>
        <p><button>付款上課去</button></p>
      </div>
      </div>
      
      {/* 葉偉 */}
      <div className="name">朱治瑄</div>
    </>
  )
}
export default App
