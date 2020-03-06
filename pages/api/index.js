import { catalog } from '../../data/catalog';

export default (req, res) => {
  res.status(200).json(catalog)
}