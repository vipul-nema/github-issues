// jsx

var MyApp = React.createClass({
		//props - mobile , name
		getInitialState : function(){
			return {
				org :"prestodb",
				repo : "presto",
				data : []
			}	
		},

		componentDidMount: function() {
			// var _this = this;
			
			
		},

		handleChange : function(event){
			var target = event.target;
			this.state[target.name] = target.value
			this.setState(this.state);
		},

		getData : function(event){
			event.preventDefault();
			event.stopPropagation();
			var _this = this;

			getData(this.state.org, this.state.repo, function(data){
					_this.setState({
						data : data
					});
				}
			);
		},
		onSubmit :function(event){
			event.preventDefault();
			event.stopPropagation();
		},
		
		render: function() {
			
			return (
				<div className="container-fluid">
					<div>
						<form onSubmit={this.onSubmit}>
							Organization:<input type="text" name="org" value= {this.state.org} onChange={this.handleChange}/>
							Repository:<input type="text" name="repo" value= {this.state.repo} onChange={this.handleChange}/>
							<button type="submit" onClick= {this.getData} >Submit</button>
						</form>
					</div>

					<div >
						<ul className="row">
							
						{this.state.data.map(function(rowData, index){
							return(
								<li>
									<div className=" row col-lg-12">
									id:	{rowData.id}
									url : {rowData.url}
									title:	{rowData.title}
									state:	{rowData.state}
									Patch Url:	{rowData.pull_request && rowData.pull_request.patch_url}
									</div>
									<hr/>
								</li>
							)
						})
						}
						</ul>
					</div>
				
					
					
				</div>	
			)
		}
	});
ReactDOM.render(<MyApp/>, document.getElementById('app'));