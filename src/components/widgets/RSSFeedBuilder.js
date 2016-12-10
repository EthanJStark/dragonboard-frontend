import React, { Component, Link } from 'react'
import feedme from 'feedme'
import http from 'http'
import moment from 'moment'

//Sample Output from FeedMe: https://www.npmjs.com/package/feedme
const sampleRSSToJson = {
  type: 'rss 2.0',
  title: 'Liftoff News',
  link: 'http://liftoff.msfc.nasa.gov/',
  description: 'Liftoff to Space Exploration.',
  language: 'en-us',
  pubdate: 'Tue, 10 Jun 2003 04:00:00 GMT',
  lastbuilddate: 'Tue, 10 Jun 2003 09:41:01 GMT',
  docs: 'http://blogs.law.harvard.edu/tech/rss',
  generator: 'Weblog Editor 2.0',
  managingeditor: 'editor@example.com',
  webmaster: 'webmaster@example.com',
  items:  [
    {
      title: 'Star City',
      link: 'http://liftoff.msfc.nasa.gov/news/2003/news-starcity.asp',
      description: 'How do Americans get ready to work with Russians aboard the International Space Station? They take a crash course in culture, language and protocol at Russia\'s <a href="http://howe.iki.rssi.ru/GCTC/gctc_e.htm">Star City</a>.',
      pubdate: 'Tue, 03 Jun 2003 09:39:21 GMT',
      guid: 'http://liftoff.msfc.nasa.gov/2003/06/03.html#item573'
    },
    {
      title: 'Watch The Sky',
      link: 'http://www.google.com',
      description: 'Sky watchers in Europe, Asia, and parts of Alaska and Canada will experience a <a href="http://science.nasa.gov/headlines/y2003/30may_solareclipse.htm">partial eclipse of the Sun</a> on Saturday, May 31st.',
      pubdate: 'Fri, 30 May 2003 11:06:42 GMT',
      guid: 'http://liftoff.msfc.nasa.gov/2003/05/30.html#item572'    },
    {
      title: 'The Engine That Does More',
      link: 'http://liftoff.msfc.nasa.gov/news/2003/news-VASIMR.asp',
      description: 'Before man travels to Mars, NASA hopes to design new engines that will let us fly through the Solar System more quickly.  The proposed VASIMR engine would do that.',
      pubdate: 'Tue, 27 May 2003 08:37:32 GMT',
      guid: 'http://liftoff.msfc.nasa.gov/2003/05/27.html#item571'    },
    {
      title: 'Astronauts\' Dirty Laundry',
      link: 'http://liftoff.msfc.nasa.gov/news/2003/news-laundry.asp',
      description: 'Compared to earlier spacecraft, the International Space Station has many luxuries, but laundry facilities are not one of them.  Instead, astronauts have other options.',
      pubdate: 'Tue, 20 May 2003 08:56:02 GMT',
      guid: 'http://liftoff.msfc.nasa.gov/2003/05/20.html#item570'    },
      {
        title: 'This Loop is Working',
        link: 'http://liftoff.msfc.nasa.gov/news/2003/news-laundry.asp',
        description: 'Compared to earlier spacecraft, the International Space Station has many luxuries, but laundry facilities are not one of them.  Instead, astronauts have other options.',
        pubdate: 'Tue, 35 May 2003 08:56:02 GMT',
        guid: 'http://liftoff.msfc.nasa.gov/2003/05/20.html#item570'    }
  ]
}
//Attepmt at getting live data via FeedMe: https://www.npmjs.com/package/feedme
const testModule = url => {
  http.get({
    hostname: 'www.npr.org',
    path: '/rss/rss.php?id=1001',
    mode: 'no-cors',
    port: 80},
    function(res) {
      var parser = new feedme();
      var mode = 'no-cors'
      var myInit = { mode: 'no-cors',};
      parser.on('title', function(title) {
        console.log('title of feed is', title);
      });
      parser.on('item', function(item) {
        console.log();
        console.log('news:', item.title);
        console.log(item.description);
      });
      res.pipe(parser);
  });
}

const convertRSStoJSX = url => {
  const rssItems = sampleRSSToJson.items

  return <ul>
    {rssItems.map( item => (
      <li key={item.title}>
        <div>
          <a href={item.link}>{item.title}</a>
          <div className='widget__RSS-feed--date'>{moment(item.pubdate).format('Mo MMMM, H:SS a')}</div>
        </div>
      </li>)
    )}
    </ul>
}

class RSSFeedBuilder extends Component {
  // static propTypes = { url: React.PropTypes.string.isRequired }
  // const { url } = this.props

  render() {
    const output = convertRSStoJSX()
    return <div>{output}</div>
  }
}

export default RSSFeedBuilder
