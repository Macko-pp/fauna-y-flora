<script>
    export let data;

    let { session } = data

    console.log(session)
</script>

<form method="POST">
    <button
        formaction="?/login"
        style="height: 40px;
            width: 100px;
            background-color: #8dd022;
            color: white;
            border: none;
            border-radius: 10px;"
    >
        Sign Up
    </button>
</form>

<!-- <p>{data}</p> -->