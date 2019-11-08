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
    name: 'here',
    image_url: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-bill-and-teds-excellent-adventure-keanu-reeves.jpg',
    description: 'description 1',
    address_line1: 'address line 1',
    address_line2: 'address line 2',
    city: 'nyc',
    state: 'ny',
    zip: '07945'
  });

  const location2 = await Location.create({
    name: 'There',
    image_url: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-bill-and-teds-excellent-adventure-keanu-reeves.jpg',
    description: 'description 2',
    address_line1: 'address line 21',
    address_line2: 'address line 22',
    city: 'Atlanta',
    state: 'ga',
    zip: '0794555'
  });
  

  const location3 = await Location.create({
    name: 'somewhere',
    image_url: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-bill-and-teds-excellent-adventure-keanu-reeves.jpg',
    description: 'description 3',
    address_line1: 'address line 31',
    address_line2: 'address line 32',
    city: 'el paso',
    state: 'tx',
    zip: '0795'
  });


  await user1.addLocation(location1);
  await user1.addLocation(location2);
  await user2.addLocation(location3);

  const today = new Date();


  const activity1 = await Activity.create({
    name: 'do something',
    date: today,
    description: 'doing something',
    duration: '1hr',
    recommended: 'no',
    cost: 'too high',
    completion: 'no',
    fitness_level: 1
  });

  const activity2 = await Activity.create({
    name: 'do something else',
    date: today,
    description: 'coding',
    duration: 'forever',
    recommended: 'no',
    cost: '$1',
    completion: 'no',
    fitness_level: 2
  });

  const activity3 = await Activity.create({
    name: 'programming',
    date: today,
    description: 'project 3',
    duration: 'neverending',
    recommended: 'yes',
    cost: '$10',
    completion: 'no',
    fitness_level: 6
  });


  // set associations here!
 
  await location1.addActivity(activity1);
  await location3.addActivity(activity2);
  await location3.addActivity(activity3);

  
  process.exit();
};

main();