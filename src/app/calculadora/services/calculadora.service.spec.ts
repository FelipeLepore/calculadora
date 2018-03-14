import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
  });

  it('should be created', inject([CalculadoraService], (service: CalculadoraService) => {
    expect(service).toBeTruthy();
  }));
  it('Deve garantir que  1 + 4 = 5', inject([CalculadoraService], (service: CalculadoraService) => {
    let soma = service.calcular(1, 4, CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  }))
  it('Deve garantir que  4 - 4 = 0', inject([CalculadoraService], (service: CalculadoraService) => {
    let substracao = service.calcular(4, 4, CalculadoraService.SUBTRACAO);
    expect(substracao).toEqual(0);
  }))
});
