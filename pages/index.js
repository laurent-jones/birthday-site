export default function Index() {
  return (
    <div style={{backgroundSize: 'cover', height: '-webkit-fill-available', backgroundRepeat: 'no-repeat', backgroundImage: 'url("/cake.jpg")', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <div style={{backgroundColor: 'white', padding: '1em', minWidth: '10em'}}>
        <div style={{textAlign: 'center'}}>Happy birthday!</div>
        <div>
          <div style={{textAlign: 'center'}}>From:</div>
          <ul>
            <li><a href='/artur'>artur</a></li>
            <li><a href='/drew'>drew</a></li>
            <li><a href='/kuldeep'>kuldeep</a></li>
            <li><a href='/ellie'>ellie</a></li>
            <li><a href='/sam'>sam</a></li>
            <li><a href='/happy-birthday-jen.html'>and all your friends at trainline!</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
