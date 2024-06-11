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

  constructor(){
    setTimeout (() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {

  }

  onCreateServer(){
    this.numberOfServers++;
    this.serverCreationStatus = this.numberOfServers + " server(s) were created\n newest server name = " + this.serverName;
  }
}
