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
            <nb-title>Artist Signup</nb-title>
          </nb-body>
          <nb-right />
        </nb-header>

       <nb-content padder>
            <nb-form>
                <nb-item regular>
                    <nb-input placeholder="Name" />
                </nb-item>
                <nb-item regular>
                    <nb-input placeholder="Shop" />
                </nb-item>
                <nb-item regular>
                    <nb-input placeholder="Styles" />
                </nb-item>
                <nb-item regular>
                    <nb-input placeholder="Hourly Rate" />
                </nb-item>
                <nb-item regular>
                    <nb-input placeholder="Link" />
                </nb-item>
               
           <nb-button light :style="{marginBottom: 20}">
                <nb-text>Submit</nb-text>
            </nb-button>
            </nb-form>
         </nb-content>
      </nb-container>
</template>