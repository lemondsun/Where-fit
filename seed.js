const { User, Location, Activity } = require('./models');

const main = async () => {
  // Delete everything in the database.
  await User.destroy({
    where: {}
  });
  await Location.destroy({
    where: {}
  });
  await Activity.destroy({
    where: {}
  });

  const user1 = await User.create({
    username: 'Bill',
    password_digest: '',
    image_url: 'https://vignette.wikia.nocookie.net/billandted/images/8/8c/Bill-S-Preston-Esq-alex-winter-25441831-500-629.jpeg/revision/latest?cb=20130211235244',
    fitness_level: 2,
    email: 'Bill@gmail.com'
  });

  const user2 = await User.create({
    username: 'Ted',
    password_digest: '',
    image_url: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-bill-and-teds-excellent-adventure-keanu-reeves.jpg',
    fitness_level: 4,
    email: 'Ted@gmail.com'
  });

  const location1 = await Location.create({
    name: 'Ridgewood Highland Park',
    image_url: 'https://www.nycgovparks.org/photo_gallery/full_size/22659.jpg',
    description: 'Ridgewood Highland Park and the Reservoir sit on a ridge formed by the Wisconsin ice',
    address_line1: 'Jackie Robinson Pkwy',
    address_line2: 'address line 2',
    city: 'Brooklyn',
    state: 'NY',
    zip: '11208'
  });

  const location2 = await Location.create({
    name: 'McCarren Park',
    image_url: 'https://www.nycgo.com/images/venues/5823/mccarren-park-christopher-postlewaite-7836__large.jpg',
    description: `McCarren Park is a public park in Brooklyn, New York City.`,
    address_line1: '776 Lorimer St,',
    address_line2: 'address line 22',
    city: 'Brooklyn',
    state: 'NY',
    zip: '11222'
  });
  

  const location3 = await Location.create({
    name: 'John V. Lindsay East River Park',
    image_url: 'https://www.nycgovparks.org/photo_gallery/full_size/23039.jpg',
    description: 'East River Park, also called John V. Lindsay East River Park, is 57.5-acre public park located on the Lower East Side of Manhattan, part of the New York City Department of Parks and Recreation.',
    address_line1: 'FDR Dr, New York',
    address_line2: 'address line 32',
    city: 'New York',
    state: 'NY',
    zip: '10009'
  });


  await user1.addLocation(location1);
  await user1.addLocation(location2);
  await user2.addLocation(location3);

  const today = new Date();


  const activity1 = await Activity.create({
    name: 'Basketball',
    date: today,
    description: 'Full Court Ball 5 on 5',
    duration: '1hr',
    recommended: 'yes',
    cost: 'free',
    completion: 'yes',
    fitness_level: 8
  });

  const activity2 = await Activity.create({
    name: 'yoga',
    date: 9/12/19,
    description: 'Yoga',
    duration: '30 mins',
    recommended: 'Yes',
    cost: '$30',
    completion: 'no',
    fitness_level: 4
  });

  const activity3 = await Activity.create({
    name: 'Running',
    date: 11/11/19,
    description: 'Fast paced sprints at low intervals.',
    duration: '45 mins',
    recommended: 'no',
    cost: 'free',
    completion: 'yes',
    fitness_level: 8
  });


  // set associations here!
 
  await location1.addActivity(activity1);
  await location3.addActivity(activity2);
  await location3.addActivity(activity3);

  
  process.exit();
};

main();