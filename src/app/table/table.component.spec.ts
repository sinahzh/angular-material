<app-filter (valueInputFilter)="InputFilter($event)"> </app-filter>


<mat-table id="customers" [dataSource]="dataSource" class="mat-elevation-z8" matSort>
  <!--Employaees-->

  <!--- Note that these columns can be defined in any order.
        The actual rendered columns are set as a property on the row definition" -->

  <!-- id Column -->
  <ng-container matColumnDef="id">
    <th mat-header-cell *matHeaderCellDef mat-sort-header>No.</th>
    <td mat-cell *matCellDef="let element">{{element.id}}</td>
  </ng-container>

  <!-- FirstName Column -->
  <ng-container matColumnDef="FirstName">
    <th mat-header-cell *matHeaderCellDef mat-sort-header>FirstName</th>
    <td mat-cell *matCellDef="let element">{{element.FirstName}}</td>
  </ng-container>

  <!-- SecondName Column -->
  <ng-container matColumnDef="SecondName">
    <th mat-header-cell *matHeaderCellDef mat-sort-header>SecondName</th>
    <td mat-cell *matCellDef="let element">{{element.SecondName}}</td>
  </ng-container>

  <!-- NationalCode Column -->
  <ng-container matColumnDef="NationalCode">
    <th mat-header-cell *matHeaderCellDef mat-sort-header>NationalCode</th>
    <td mat-cell *matCellDef="let element">{{element.NationalCode}}</td>
  </ng-container>

  <!-- TotalTimeEmployeeInMonth Column -->
  <ng-container matColumnDef="TotalTimeEmployeeInMonth">
    <th mat-header-cell *matHeaderCellDef mat-sort-header>
      TotalTimeEmployeeInMonth
    </th>
    <td mat-cell *matCellDef="let element">
      {{element.TotalTimeEmployeeInMonth}}
    </td>
  </ng-container>

  <!-- AverageEmployeeArrivalTime Column -->
  <ng-container matColumnDef="AverageEmployeeArrivalTime">
    <th mat-header-cell *matHeaderCellDef mat-sort-header>
      AverageEmployeeArrivalTime
    </th>
    <td mat-cell *matCellDef="let element">
      {{element.AverageEmployeeArrivalTime}}
    </td>
  </ng-container>

  <!-- AverageEmployeeDepartureTime Column -->
  <ng-container matColumnDef="AverageEmployeeDepartureTime">
    <th mat-header-cell *matHeaderCellDef mat-sort-header>
      AverageEmployeeDepartureTime
    </th>
    <td mat-cell *matCellDef="let element">
      {{element.AverageEmployeeDepartureTime}}
    </td>
  </ng-container>

  <!-- NumberOfProductsProducedByAnyEmployee Column -->
  <ng-container matColumnDef="NumberOfProductsProducedByAnyEmployee">
    <th mat-header-cell *matHeaderCellDef mat-sort-header>
      NumberOfProductsProducedByAnyEmployee
    </th>
    <td mat-cell *matCellDef="let element">
      {{element.NumberOfProductsProducedByAnyEmployee}}
    </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  <!-- <tr class="mat-row" *matNoDataRow>
     <td class="mat-cell" colspan="4">No data matching the filter "{{input.value}}"</td>
  </tr> -->

</mat-table>

<app-pagination [length]=5 [pageSize]=5 [pageSizeOptions]="[5, 10, 25, 100]" [pageIndex]=0>
</app-pagination>