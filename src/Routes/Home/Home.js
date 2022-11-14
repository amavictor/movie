import {Navbar} from "../../Navbar/Navbar";
import {Button} from "../../Button/Button";

export const Home = () => {
  return(
      <>
        <header>
            <Navbar/>
            <div>
                <h5>Welcome</h5>
                <div/>
            </div>
            <div>
                <h2>ENJOY NONSTOP ENTERTAINMENT</h2>
                <p>You've got us, why go to cinemas? Enjoy cinema experience brought to your laptop screen</p>
                <div>
                    <Button>Show plan</Button>
                    <Button primary>Get started</Button>
                </div>
            </div>


        </header>
      </>
  )
}