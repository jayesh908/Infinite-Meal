import React from 'react'



class Userclass extends React.Component {
        constructor({name}){
            super({name})
            // console.log(name)

            this.state = {
                count:0,
                count1:1,
                userinfo: {
                    name: "",
                    location: ""
                  }
                }
            // console.log("child")
        }

        async componentDidMount() {
            // console.log("p compo")
           try {
            const data = await fetch("https://api.github.com/users/jayesh908")
            const user = await data.json()
            this.setState({
              userinfo: user
            })
            // console.log(user)
        
           } catch (error) {
                // console.log(error.message)
           }    
          }
          componentDidUpdate(){
            // console.log("updated")
          }

          componentWillUnmount(){
            // console.log("unmount")
          } 
        
    render() {
            console.log("childr")
        const{name} = this.props
        return (
            <div className='user-card'>
                <h1>Count:{this.state.count}</h1>
                <button onClick={()=>{
                        this.setState({
                            count:this.state.count+1
                        })
                }}>Increase Count</button>
                <h1>Count:{this.state.count1}</h1>
                <h3>Name:{this.state.userinfo.name  }</h3>
                <h3>Location:{this.state.userinfo.location}</h3>
                <h3>Contact jayeshchauhan169</h3>
            </div>
        )
    }

}

export default Userclass