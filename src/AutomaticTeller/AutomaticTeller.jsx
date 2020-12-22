import React from 'react';
import {Component} from 'react';
import {withdraw} from '../WithdrawalService/WithdrawalService';

export default class AutomaticTeller extends Component{
	
	                constructor(props){
		              super(props)
		              this.state = {amount: ''}
                      this.handleChange = this.handleChange.bind(this)
                      this.handleSubmit = this.handleSubmit.bind(this)
	                }

                    handleChange(event){
	                        this.setState({amount: event.target.value})
                    }

                    handleSubmit(event){
	                      withdraw(this.state.amount)
                          event.preventDefault()
	
                    }

	                render() {return ( <div>
                                         <form onSubmit={this.handleSubmit}>
                                           <label>
                                              Amount:
                                              <input id = "amount" type="text" name="name" value= {this.state.amount} onChange= {this.handleChange} />
                                           </label>
                                           <input type="submit" id = "withdraw" value="Withdraw" />
                                         </form>
                                       </div>)
                                    }
               }