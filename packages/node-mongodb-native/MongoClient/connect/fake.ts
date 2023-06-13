class MongoClient {
  private connectionLock?: Promise<this>;

  async connect(): Promise<this> {
    if (this.connectionLock) {
      console.log("Find another process connecting !");
      return this.connectionLock;
    }

    try {
      this.connectionLock = this._connect();
      await this.connectionLock;

      console.log("connecting");
    } finally {
      // release
      this.connectionLock = undefined;
      console.log("connected");
    }

    return this;
  }

  private async _connect(): Promise<this> {
    console.log("Start connect");
    return new Promise((resolve) => resolve(this));
  }

  // test(a: string): void;
  // test(b: number): void;
  test(a: any, b: any): any {
    console.log(a, b);
    if (true === true) (a = {}), (b = {});
  }
}

console.log("------------------------");

const mongoClient = new MongoClient();

mongoClient.connect();
mongoClient.connect();
mongoClient.connect();

// test typescript keyof typeof
export const AuthMechanism = Object.freeze({
  MONGODB_AWS: "MONGODB-AWS",
  MONGODB_CR: "MONGODB-CR",
  MONGODB_DEFAULT: "DEFAULT",
  MONGODB_GSSAPI: "GSSAPI",
  MONGODB_PLAIN: "PLAIN",
  MONGODB_SCRAM_SHA1: "SCRAM-SHA-1",
  MONGODB_SCRAM_SHA256: "SCRAM-SHA-256",
  MONGODB_X509: "MONGODB-X509",
  /** @experimental */
  MONGODB_OIDC: "MONGODB-OIDC",
} as const);

/** @public */
export type AuthMechanism = (typeof AuthMechanism)[keyof typeof AuthMechanism];

const test = { a: "1", b: 2 } as const;
type Test = (typeof test)[keyof typeof test];

enum E {
  a = "1",
  b = 2,
}
type T = `${E}`;
