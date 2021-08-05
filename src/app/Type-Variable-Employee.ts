export class TypeVariableEmployee {
    public id: number;
    public firstName: string;
    public lastName: string;
    public NationalCode: number;
    public TotalTimeEmployeeInMonth: number;
    public AverageEmployeeArrivalTime: number;
    public AverageEmployeeDepartureTime: number;
    public NumberOfProductsProducedByAnyEmployee: number;
    constructor(
      id: number,
      firstName: string,
      lastName: string,
      NationalCode: number,
      TotalTimeEmployeeInMonth: number,
      AverageEmployeeArrivalTime: number,
      AverageEmployeeDepartureTime: number,
      NumberOfProductsProducedByAnyEmployee: number
    ) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.NationalCode = NationalCode;
      this.TotalTimeEmployeeInMonth = TotalTimeEmployeeInMonth;
      this.AverageEmployeeArrivalTime = AverageEmployeeArrivalTime;
      this.AverageEmployeeDepartureTime = AverageEmployeeDepartureTime;
      this.NumberOfProductsProducedByAnyEmployee = NumberOfProductsProducedByAnyEmployee;
    }
  }
  