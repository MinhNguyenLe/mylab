import App from "../App";

import Enzyme, { shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
chai.use(chaiEnzyme());

Enzyme.configure({ adapter: new Adapter() });

describe("Testin <App/> Component", () => {
  it("App renders a message", () => {
    const wrapper = shallow(<App />);
    const message = (
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    );
    chai.expect(wrapper).to.contain(message);
  });
});
