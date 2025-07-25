class GyroscopeData {
    constructor(alpha, beta, gamma) {
        this.alpha = alpha;
        this.beta = beta;
        this.gamma = gamma;
    }
}

class Boundaries {
    constructor(left, top, right, bottom) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }
}

class Settings {
    constructor(cursorType) {
        this.cursorType = cursorType;

        this.alphaMin = 0;
        this.alphaMax = 360;
        this.alphaCentre = Math.round((this.alphaMin + this.alphaMax) / 2);

        this.betaMin = -180;
        this.betaMax = 180;
        this.betaCentre = Math.round((this.betaMin + this.betaMax) / 2);

        this.gammaMin = -90;
        this.gammaMax = 90;
        this.gammaCentre = Math.round((this.gammaMin + this.gammaMax) / 2);

        this.fadeOnInactive = false;

        this.boundaries = new Boundaries(this.alphaMin, this.betaMax, this.alphaMax, this.betaMin);
    }
}

class ClientData {
    constructor(clientId, clickState, chars, customCommand) {
        this.clientId = clientId;
        this.clickState = clickState;
        this.chars = chars;
        this.customCommand = customCommand;

        this.gyroscopeData = new GyroscopeData(0, 0, 0);
        this.settings = new Settings("Default");
    }

    setAlphaCentre() {
        this.settings.alphaCentre = this.gyroscopeData.alpha;
    }

    setBetaCentre() {
        this.settings.betaCentre = this.gyroscopeData.beta;
    }

    setGammaCentre() {
        this.settings.gammaCentre = this.gyroscopeData.gamma;
    }

    setCentre() {
        this.setAlphaCentre();
        this.setBetaCentre();
        this.setGammaCentre();
    }
}
