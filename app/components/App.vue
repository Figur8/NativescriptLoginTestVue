<template>
    <Page>
        <FlexboxLayout class="page">
            <StackLayout class="form">
                <Image
                        src="https://www.carnegietechnologies.com/sites/ct/assets/image/logo-octopus.png"
                        loadMode="async" stretch="aspectFit"></Image>

                <StackLayout class="input-field">
                    <TextField hint="email" class="input" keyboardType="email"
                               autocorrect="false" autocapitalizationType="none">
                    </TextField>
                </StackLayout>

                <StackLayout class="input-field">
                    <TextField hint="Password" secure="true" class="input">
                    </TextField>
                </StackLayout>

                <Button text="Log In" class="btn btn-primary"
                        @tap="goTo('home')"></Button>
            </StackLayout>
            <Home />
        </FlexboxLayout>

    </Page>
</template>

<script>
    import Home from "./Home";
    export default {
        data() {
            return {
                routes: {
                    home: Home
                }
            };
        },
        methods: {
            goTo(s) {
                this.$navigateTo(this.routes[s]);
            }
        },
        components: {
            Home,
        }
    };
</script>

<style scoped>
    .page {
        align-items: center;
        flex-direction: column;
    }
    .form {
        margin-left: 30;
        margin-right: 30;
        flex-grow: 2;
        vertical-align: middle;
    }

    .btn { background-color: #28ABE2 }
</style>