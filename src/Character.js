import React, { Component } from 'react'
import { Avatar, Balloon } from 'nes-react'

export default class Character extends Component {
    render() {
        return <section style={{ marginBottom: '10px' }}>
            <h5>{this.props.name}</h5>
            <Avatar src={this.props.image}
                large
                style={{
                    marginRight: '10px'
                }}
            />
            <Balloon fromLeft style={{ maxWidth: '76%' }}>
                {this.props.text}
            </Balloon>
        </section>
    }
}
