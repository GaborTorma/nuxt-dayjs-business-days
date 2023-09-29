<template>
	<div>
		<p>2022-10-15 (saturday) isBusinessDay: {{ $dayjs('2022-10-15').isBusinessDay() }}</p>
		<p>2022-11-01 (tuesday) isHoliday: {{ $dayjs('2022-11-01').isHoliday() }}</p>
	</div>
</template>
