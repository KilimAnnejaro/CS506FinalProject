
  componentDidMount(){
let data = {
	"instances": [
		[4, 1, 0, 4, 0, 1, 3, 4, 4, 3, 3, 2, 3, 0, 1, 0, 0, 1, 0, 3],
		[0, 3, 3, 0, 4, 3, 0, 1, 0, 0, 0, 0, 1, 3, 3, 3, 4, 3, 3, 1]
	]
};
    return fetch("https://ml.googleapis.com/v1/projects/cs506finalproject/models/abortion/versions/abortionv1:predict", {
        	body: JSON.stringify(data),
        	headers: {
                	Authorization: "Bearer ya29.Glz5BlYTOd5dHQgPLocBCa9ZH3JkknhQXs8OTCukGjLnK3DPCcaJt2eK5M0JBqjghBHtnSA9_UqnOpSp8jW1vLeUxSPU0_EtrSfT8yRlTMTIlNA5GIJ-IuR_56wTLQ", "Content-Type": "application/json" },
        	method: "POST" }).then((response) => response.json())
    .then((responseJson) => {
console.log("hello1");
console.log(JSON.stringify(responseJson));
      this.setState({
        isLoading: false,
        dataSource: responseJson.predictions,
      }, function(){
console.log("hello2");
	      console.log(responseJson);
      });
    }).catch((error) =>{
      console.error(error);
    });
  }

