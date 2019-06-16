

export default class PopulationController {
  static home(req, res) {
    console.log('hi');
    res.status(200).send('index.html');
  }
}
