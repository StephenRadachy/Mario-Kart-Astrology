import React, { Component } from 'react'
import { Container, List } from 'nes-react'
import Character from './Character'
import AstrologyData from './AstrologyData.json'

export default class App extends Component {
  render() {
    return <div style={{
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 768,
      padding: '10px'
    }}>
      <h1>Mario Kart Astrology</h1>
      <h4>Your chosen Mario Kart player says WAY more than a zodiac sign does - <a href='https://twitter.com/ChloeCondon/status/1108738908999700480' target='_blank' rel='noopener noreferrer'>@ChloeCondon</a></h4>
      <br></br>
      <br></br>
      <section>
        {
          AstrologyData
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(c => <Character name={c.name} image={c.image} text={c.text} key={Math.random().toString().substring(2)} />)
        }
      </section>
      <br></br>
      <Container title='credits'>
        <p>Built with</p>
        <List>
          <li><a href='https://github.com/facebook/create-react-app'>Create React App</a></li>
          <li><a href='https://github.com/nostalgic-css/NES.css'>NES.css</a></li>
          <li><a href='https://github.com/bschulte/nes-react'>nes-react</a></li>
        </List>
        <p>Mario Kart 8 Deluxe characters & images</p>
        <List>
          <li><a href='https://www.mariowiki.com/Mario_Kart_8_Deluxe#Characters'>Super Mario Wiki</a></li>
        </List>
      </Container>
    </div>
  }
}
