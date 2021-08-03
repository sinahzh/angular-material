export class TypeVariableEmployee {
    public id: number;
    public FirstName: string;
    public lastName: string;
    public NationalCode: number;
    public TotalTimeEmployeeInMonth: number;
    public AverageEmployeeArrivalTime: number;
    public AverageEmployeeDepartureTime: number;
    public NumberOfProductsProducedByAnyEmployee: number;
    constructor(
      id: number,
      FirstName: string,
      lastName: string,
      NationalCode: number,
      TotalTimeEmployeeInMonth: number,
      AverageEmployeeArrivalTime: number,
      AverageEmployeeDepartureTime: number,
      NumberOfProductsProducedByAnyEmployee: number
    ) {
      this.id = id;
      this.FirstName = FirstName;
      this.lastName = lastName;
      this.NationalCode = NationalCode;
      this.TotalTimeEmployeeInMonth = TotalTimeEmployeeInMonth;
      this.AverageEmployeeArrivalTime = AverageEmployeeArrivalTime;
      this.AverageEmployeeDepartureTime = AverageEmployeeDepartureTime;
      this.NumberOfProductsProducedByAnyEmployee = NumberOfProductsProducedByAnyEmployee;
    }
  }
  