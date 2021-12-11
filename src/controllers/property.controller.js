import Property from "../models/Property";

export const createProperty = async (req, res) => {
  const {name, summary, description, property_type, room_type, bedrooms, bathrooms, price, images} = req.body;

  try {
    const newProperty = new Property({
      name, summary, description, property_type, room_type, bedrooms, bathrooms, price, images
    });

    const propertySaved = await newProperty.save();

    res.status(201).json(propertySaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getPropertyById = async (req, res) => {
  const { propertyId } = req.params;

  const property = await Property.findById(propertyId);
  res.status(200).json(property);
};

export const getProperties = async (req, res) => {
  const properties =  await Property.aggregate(
    [{$sample: { size: 12}}]
 );
  return res.json(properties);
};

export const updatePropertyById = async (req, res) => {
  const updatedProperty = await Property.findByIdAndUpdate(
    req.params.propertytId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedProperty);
};

export const deletePropertyById = async (req, res) => {
  const { propertyId } = req.params;

  await Property.findByIdAndDelete(propertyId);

  // code 200 is ok too
  res.status(204).json();
};
