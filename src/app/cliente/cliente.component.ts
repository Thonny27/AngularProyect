import {Component, OnInit} from '@angular/core';
import {ClienteServiceService} from '../services/cliente-service.service';
import {Cliente} from '../cliente';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  private cliente: Cliente = new Cliente();

  constructor(private clienteService: ClienteServiceService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.cargarCliente();
    console.log(this.route.snapshot.data);
  }

  cargarCliente() {
    this.route.params.subscribe(params => {
      console.log("params: ", params)
      let id: number = params['id']
      if (id) {
        this.clienteService.findById(id).subscribe((cliente) => this.cliente = cliente)
      }
    })
  }

  insert(): void {
    this.clienteService.insert(this.cliente).subscribe(response => {
        this.router.navigate(['list']);
      }
    );
  }

  update() {
    this.clienteService.updateById(this.cliente).subscribe(cliente => {
      this.router.navigate(['/list']);
  })
  }
}
