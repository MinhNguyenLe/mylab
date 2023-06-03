class MongoClient {
  private connectionLock?: Promise<this>;

  async connect(): Promise<this> {
    if (this.connectionLock) {
      return this.connectionLock;
    }

    try {
      this.connectionLock = this._connect();
      await this.connectionLock;
    } finally {
      // release
      this.connectionLock = undefined;
    }

    return this;
  }

  private async _connect(): Promise<this> {
    return new Promise((resolve) => resolve(this));
  }
}
console.log("running");
