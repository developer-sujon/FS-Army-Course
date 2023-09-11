//Internal Lib Import
const { invoiceService } = require("../../../../services");

const updateProperties = async (req, res, next) => {
  const { id } = req.params;
  const { userId } = req.user;

  try {
    const invoice = await invoiceService.updateProperties(id, req.body, userId);

    const response = {
      code: 200,
      message: "invoice updated successfully",
      data: invoice,
      links: {
        self: `/invoices/${invoice.id}`,
      },
    };

    res.json(response);
  } catch (e) {
    next(e);
  }
};

module.exports = updateProperties;
