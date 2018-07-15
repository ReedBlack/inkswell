<template>
  <nb-container :style="{backgroundColor: '#fff'}">
        <nb-header>
          <nb-left>
            <nb-button
              transparent
              :onPress="() => this.props.navigation.goBack()"
            >
              <nb-icon name="arrow-back" />
            </nb-button>
          </nb-left>
          <nb-body>
            <nb-title>Client Signup</nb-title>
          </nb-body>
          <nb-right />
        </nb-header>

       <nb-content padder>
            <nb-form>
                <nb-item regular>
                    <nb-input placeholder="Name" />
                </nb-item>
                <nb-item regular>
                    <nb-input placeholder="Age" />
                </nb-item>
                <nb-item regular>
                    <nb-input placeholder="Desired Tattoo Location" />
                </nb-item>
                <nb-item regular>
                    <nb-input placeholder="Desired Tattoo Size" />
                </nb-item>
                <nb-item regular>
                    <nb-input placeholder="Budget Range" />
                </nb-item>
                  <nb-content padder>
            <nb-textarea :rowSpan="8" bordered placeholder="Idea Description" />
       </nb-content>
           <nb-button primary :style="{marginBottom: 20}">
                <nb-text>Submit</nb-text>
            </nb-button>
            </nb-form>
         </nb-content>
      </nb-container>
</template>