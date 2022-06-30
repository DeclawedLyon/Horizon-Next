export default function(req, res) {
  res.status(200).json([
    {
      locationName: ``,
      locationGroup: ``,
      polygonCoords: [
        {lat: 48.43807004526669, lng: Number(-123.41378091893203)},
        {lat: 48.4387363642985, lng: Number(-123.41392480692663)},
        {lat: 48.43876208715985, lng: Number(-123.41388603382865)},
        {lat: 48.43884932111439, lng: Number(-123.4138826622549)},
        {lat: 48.4388962931817, lng: Number(-123.41383883179631)},
        {lat: 48.43892425272495, lng: Number(-123.4137477993054)},
        {lat: 48.439106548574834, lng: Number(-123.41323532008693)},
        {lat: 48.43913786313263, lng: Number(-123.41321340485764)},
        {lat: 48.43920608406914, lng: Number(-123.41285938960596)},
        {lat: 48.43919490031573, lng: Number(-123.41285264645849)},
        //may need to fix corner of box here
        {lat: 48.4392161494451, lng: Number(-123.41282230229481)},
        {lat: 48.43924299043793, lng: Number(-123.41265035203419)},
        {lat: 48.43933469706019, lng: Number(-123.41192377787083)},
        {lat: 48.43941745655168, lng: Number(-123.41150233114138)},
        {lat: 48.43944877091785, lng: Number(-123.41114494432514)},
        //tree cutout top right starts here
        {lat: 48.43943423210738, lng: Number(-123.41107919863725)},
        {lat: 48.43946666483268, lng: Number(-123.41097299406448)},
        //ends here
        {lat: 48.43948232200341, lng: Number(-123.41080441536636)},
        {lat: 48.43841538662928, lng: Number(-123.41055154733297)},
        {lat: 48.43840867627308, lng: Number(-123.41059537779158)},
        {lat: 48.43842209698459, lng: Number(-123.4106038067259)},
        {lat: 48.43841874180704, lng: Number(-123.41062909352897)},
        {lat: 48.438404202701776, lng: Number(-123.4105987493653)},
        {lat: 48.43838966359235, lng: Number(-123.41059200621784)},
        //bus stop starts here
        {lat: 48.43836729572385, lng: Number(-123.41080778693717)},
        {lat: 48.438380716446275, lng: Number(-123.4108128442978)},
        {lat: 48.43839861073735, lng: Number(-123.41064257982401)},
        {lat: 48.43840643948769, lng: Number(-123.4106543803321)},
        {lat: 48.43807004526669, lng: Number(-123.41378091893203)}
      ],
      lastCutDate: new Date(),
      lastTrimDate: new Date()
    },
    // {
    //   locationName: ``,
    //   locationGroup: ``,
    //   polygonCoords: [
    //     {},
    //     {}
    //   ],
    //   lastCutDate: new Date(),
    //   lastTrimDate: new Date()
    // },
  ])
}