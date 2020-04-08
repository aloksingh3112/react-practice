import React from 'react';

function withTooltip(Component){
  return class extends React.Component{
         state={
                showToolTip:false
         }
          mouseOut=()=>{
              this.setState({
                     showToolTip:false  
                })
          }

          mouseOver=()=>{
             this.setState({
                  showToolTip:true  
             })
          }

         render(){
                return(
                    <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                         <Component {...this.props} tooltip={this.state.showToolTip}/>   
                    </div>   
                      
                )
         }
  }
}

export default withTooltip;