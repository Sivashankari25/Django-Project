<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update Blog</title>
</head>

<body>
    <h2 style="text-align: center; padding-top: 1em; padding-bottom: 1em;">Edit Blog</h2>

    <form action="" method="POST">
        {% csrf_token %}
        {{ form.as_p }}
        <input type="submit" class="btn btn-success">
    </form>
</body>

</html>