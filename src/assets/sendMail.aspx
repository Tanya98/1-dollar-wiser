<%@ Page Title="" Language="C#" AutoEventWireup="true" %>

<html>

<body>
    <script runat="server">

        string host = "smtp.zoho.com";
        int port = 587;
        string from = "info@fescourses.org";
        string to = "info@fescourses.org";
        string username = "info@fescourses.org";
        string password = "B7*j3Ls_";

        bool enableSsl = true;

        protected void Page_Load(object sender, EventArgs e)
        {
            string res = "OK";
            try
            {
                string empty = "N/A";
                string email = Request.Form["email"] ?? empty;
                string message = Request.Form["message"] ?? empty;
                string phone = Request.Form["phone"] ?? empty;
                string name = Request.Form["name"] ?? empty;
                string lang = Request.Form["lang"] ?? empty;
                string subject = Request.Form["subject"] ?? empty;
                string comments = Request.Form["comments"] ?? empty;

                string firm = Request.Form["firm"] ?? empty;
                string address = Request.Form["address"] ?? empty;
                string city = Request.Form["city"] ?? empty;
                string state = Request.Form["state"] ?? empty;
                string zip = Request.Form["zip"] ?? empty;
                string fax = Request.Form["fax"] ?? empty;
                string certdelivery = Request.Form["certdelivery"] ?? empty;
                string coursepayment = Request.Form["coursepayment"] ?? empty;

                System.Net.Mail.SmtpClient c = new System.Net.Mail.SmtpClient(host, port);
                c.EnableSsl = enableSsl;
                c.Credentials = new System.Net.NetworkCredential(username, password);
                System.Net.ServicePointManager.ServerCertificateValidationCallback += delegate { return true; };


                string body = "Name: <strong>" + name + "</strong><br />" +
                        "eMail: <strong>" + email + "</strong><br />" +
                        "Phone: <strong>" + phone + "</strong><br />" +
                        "Message: <strong>" + message + "</strong><br />" +
                        "Subject: <strong>" + subject + "</strong><br />" +
                        "Comments: <strong>" + comments + "</strong><br />" +
                        "Language: <strong>" + lang + "</strong><br />" +
                        (firm == empty ? "" : ("Firm : <strong>"  + firm + "</strong><br />")) +
                        (fax == empty ? "" : ("Fax : <strong>" + fax + "</strong><br />")) +
                        (address == empty ? "" : ("Address : <strong>" + address + "</strong><br />")) +
                        (city == empty ? "" : ("City : <strong>" + city + "</strong><br />")) +
                        (state == empty ? "" : ("State : <strong>" + state + "</strong><br />")) +
                        (zip == empty ? "" : ("Zip : <strong>" + zip + "</strong><br />")) +
                    (certdelivery == empty ? "" : ("Certificate Delivery Method : <strong>" + certdelivery + "</strong><br />")) +
                    (coursepayment == empty ? "" : ("Course Payment : <strong>" + coursepayment + "</strong><br />"))

                        ;

                System.Net.Mail.MailMessage msg = new System.Net.Mail.MailMessage(from, to, subject, body);
                msg.IsBodyHtml = true;
                c.Send(msg);
            }
            catch (Exception ex)
            {
                res = ex.Message;
            }

            Response.Write(res);
            Response.End();

        }
    </script>


    <form id="Form1" runat="server">
    </form>
</body>
</html>
