import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  numberOfServers = 0;
  serverName = 'myServerName';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2']

  constructor(){
    setTimeout (() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {

  }

  onCreateServer(){
    this.serverCreated = true;
    this.numberOfServers++;
    this.serverCreationStatus = this.numberOfServers + " server(s) were created\n newest server name = " + this.serverName;
    this.servers.push(this.serverName);
  }

  getColor(){
    return this.serverCreated ? 'green' : 'red';
  }

  getServerStatus(){
    return this.serverCreated ? 'online' : 'offline';
  }
}
