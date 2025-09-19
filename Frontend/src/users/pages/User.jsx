import React from 'react'

import Userlist from '../component/Userlist'
export default function User() {

  const USERS = [
    {
      id: 'u1',
      name: 'Max Schwarz',
      image: 'https://th.bing.com/th/id/R.e24bcae66486713c38f55657ad16933d?rik=R%2bglGKaUoBA4wg&riu=http%3a%2f%2fwww.socsci.uci.edu%2ffiles%2fnews_events%2fexpressive_110411_1410x930.jpg&ehk=AN1C%2fpijJLFSYYlujnjJKm0ppS3XFh%2fpSVieamOvrJI%3d&risl=&pid=ImgRaw&r=0',
      places: 3

    }
  ];


  return <Userlist items={USERS} />;



}
