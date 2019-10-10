<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!"/>
        <FlexboxLayout class="page">
            <StackLayout class="form">
                <Image src="https://www.carnegietechnologies.com/sites/ct/assets/image/logo-octopus.png" loadMode="async" stretch="aspectFit"></Image>

                <StackLayout class="input-field">
                    <TextField hint="email" class="input" keyboardType="email" autocorrect="false" autocapitalizationType="none"></TextField>
                </StackLayout>

                <StackLayout class="input-field">
                    <TextField hint="Password" secure="true"  class="input"></TextField>
                    <Label> {{ msg }}</Label>
                </StackLayout>

                <Button text="Log In" class="btn btn-primary" @tap="$showModal(Home)"></Button>

            </StackLayout>
        </FlexboxLayout>
    </Page>
</template>

<script lang="ts">
    import Vue from 'nativescript-vue';
    import Home from "./Home.vue";
    export default {
      goToHome(){
          return {
              detailPage: Home
          }
      }

    }
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

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
