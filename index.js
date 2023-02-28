const Button = (props) => {
  //  Write your code here.
  const {name, button-style} = props
  return <button className = {`button ${button-style}`}>{name}</button>
}

const element = (
  //  Write your code here.
  <div className = "social-buttons-container"> 
  <div className = "content-container">
  <h1 className = "heading">Social Button</h1>
  <div className = "buttons-container">
    <Button button-style = "like-button" name = "Like" />
    <Button button-style = "comment-button" name = "Comment" />
    <Button button-style = "share-button" name = "Share" />
    </div>
  </div>
</div>
)

ReactDOM.render(element, document.getElementById('root'))
