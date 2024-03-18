<template>
  <div>
    <p>
      2022-10-15 (saturday) isBusinessDay:
      <span data-testid="is-business-day">
        {{ $dayjs('2022-10-15').isBusinessDay() }}
      </span>
    </p>
    <p>
      2022-11-01 (tuesday) isHoliday:
      <span data-testid="is-holiday">
        {{ $dayjs('2022-11-01').isHoliday() }}
      </span>
    </p>
  </div>
</template>
