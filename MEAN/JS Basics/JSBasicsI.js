<!DOCTYPE html>
<html>
<head>
	<title>JS Basics I</title>
	<script type="text/javascript">

	// 1
	const x = [];
	x.push('coding');
	x.push('dojo');
	x.push('rocks');
	console.log(x);


	// 2
	const y = [];
	y.push(88); // no error, the operation was allowed
	console.log(y);


	// 3
	const z = [9, 10, 6, 5, -1, 20, 12, 2];
	for (let i = 0; i < z.length-1; i++) {
		console.log(z[i]);
	}


	// 4
	const names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
	for (let i = 0; i < names.length; i++) {
		if (names[i].length === 5) {
			console.log(names[i]);
		}
	}


	// 5
	function yell(string) {
		return string.toUpperCase();
	};
	console.log(yell("hello world"));


	</script>
</head>
<body>

</body>
</html>